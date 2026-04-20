// Web Audio API Sound Manager
class SoundManager {
  private audioContext: AudioContext | null = null;
  private isMuted: boolean = false;

  constructor() {
    this.isMuted = localStorage.getItem('soundMuted') === 'true';
  }

  private getAudioContext(): AudioContext {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return this.audioContext;
  }

  playHover(): void {
    if (this.isMuted) return;
    
    const ctx = this.getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.frequency.setValueAtTime(600, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.1);
    
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0, ctx.currentTime + 0.1);
    
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.1);
  }

  playClick(): void {
    if (this.isMuted) return;
    
    const ctx = this.getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.frequency.setValueAtTime(400, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.15);
    
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0, ctx.currentTime + 0.15);
    
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.15);
  }

  playNotification(): void {
    if (this.isMuted) return;
    
    const ctx = this.getAudioContext();
    const notes = [523.25, 659.25, 783.99]; // C5, E5, G5
    
    notes.forEach((freq, index) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.frequency.setValueAtTime(freq, ctx.currentTime + index * 0.05);
      gain.gain.setValueAtTime(0.1, ctx.currentTime + index * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + index * 0.05 + 0.1);
      
      osc.start(ctx.currentTime + index * 0.05);
      osc.stop(ctx.currentTime + index * 0.05 + 0.1);
    });
  }

  toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    localStorage.setItem('soundMuted', String(this.isMuted));
    return this.isMuted;
  }

  getMuted(): boolean {
    return this.isMuted;
  }
}

export const soundManager = new SoundManager();
