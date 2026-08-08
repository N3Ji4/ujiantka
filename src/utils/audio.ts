class SoundEngine {
  private ctx: AudioContext | null = null;
  private ambientSource: AudioNode | null = null;
  private ambientGain: GainNode | null = null;
  private isAmbientPlaying: boolean = false;
  private ambientType: 'rain' | 'stream' | 'binaural' = 'rain';
  private ambientOsc: OscillatorNode | null = null;

  public getAmbientType(): 'rain' | 'stream' | 'binaural' {
    return this.ambientType;
  }

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public playCorrectSound() {
    try {
      this.initContext();
      if (!this.ctx) return;
      
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.1); // E5
      osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.22); // G5

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.52);
    } catch {
      // Audio autoplay policy fallback
    }
  }

  public playIncorrectSound() {
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(260, now + 0.18);

      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.38);
    } catch {
      // Silent catch
    }
  }

  public playChillChime() {
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(392.00, now); // G4
      osc.frequency.exponentialRampToValueAtTime(587.33, now + 0.15); // D5

      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.6);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.65);
    } catch {
      // Audio fallback
    }
  }

  public toggleAmbient(type: 'rain' | 'stream' | 'binaural' = 'rain'): boolean {
    try {
      this.initContext();
      if (!this.ctx) return false;

      if (this.isAmbientPlaying) {
        this.stopAmbient();
        return false;
      } else {
        this.startAmbient(type);
        return true;
      }
    } catch {
      return false;
    }
  }

  public startAmbient(type: 'rain' | 'stream' | 'binaural' = 'rain') {
    this.initContext();
    if (!this.ctx) return;
    this.stopAmbient();

    this.ambientType = type;
    const bufferSize = 2 * this.ctx.sampleRate;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);

    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      output[i] = (lastOut + 0.02 * white) / 1.02;
      lastOut = output[i];
      output[i] *= 3.5;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    if (type === 'rain') {
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(950, this.ctx.currentTime);
    } else if (type === 'stream') {
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(550, this.ctx.currentTime);
      filter.Q.setValueAtTime(3.5, this.ctx.currentTime);
    } else {
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(380, this.ctx.currentTime);
    }

    this.ambientGain = this.ctx.createGain();
    this.ambientGain.gain.setValueAtTime(0.035, this.ctx.currentTime);

    whiteNoise.connect(filter);
    filter.connect(this.ambientGain);
    this.ambientGain.connect(this.ctx.destination);

    // If binaural mode, add a soothing harmonic drone oscillator
    if (type === 'binaural') {
      try {
        const osc = this.ctx.createOscillator();
        const oscGain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(216, this.ctx.currentTime); // G3 harmonic drone
        oscGain.gain.setValueAtTime(0.015, this.ctx.currentTime);
        osc.connect(oscGain);
        oscGain.connect(this.ctx.destination);
        osc.start();
        this.ambientOsc = osc;
      } catch {
        // ignore
      }
    }

    whiteNoise.start();
    this.ambientSource = whiteNoise;
    this.isAmbientPlaying = true;
  }

  public stopAmbient() {
    if (this.ambientSource) {
      try {
        (this.ambientSource as AudioScheduledSourceNode).stop();
        this.ambientSource.disconnect();
      } catch {
        // Safe discard
      }
      this.ambientSource = null;
    }
    if (this.ambientOsc) {
      try {
        (this.ambientOsc as AudioScheduledSourceNode).stop();
        this.ambientOsc.disconnect();
      } catch {
        // Safe discard
      }
      this.ambientOsc = null;
    }
    this.isAmbientPlaying = false;
  }

  public getIsPlaying(): boolean {
    return this.isAmbientPlaying;
  }
}

export const sound = new SoundEngine();
