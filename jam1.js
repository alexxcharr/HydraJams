solid([0.4, 0.5, 0.6], 0.8, 0.1)
.blend(osc(3, 0.1, 0.5).colorama(11).diff(voronoi()))
.diff(noise(4))
.scale(()=>a.fft[0]* 0.5 +1)
.saturate(1.2)
.modulate(osc(()=>a.fft[0] * 0.05))
.modulate(o0)
.blend(o0)
.out()

render(o0)