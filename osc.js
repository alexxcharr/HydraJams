a.show()
a.setSmooth(0.5)

osc(10, 0.1, 0.75)
.modulate(noise(() => a.fft[3] * 8, 0.01))
.kaleid(4)
//.re
//.repeat(10)
.diff(osc(20, 0.1).modulateScrollY(osc(10), () => a.fft[1] * 0.01))
.diff(shape(2, 0.07, 0.1).scale(2.8).repeat(10).modulate(noise(120, 0.01).diff(o0).``))
//.scale([0.99, 0.7, 1.03].fast(0.02))
.blend(o0)
.modulate(o0, 0.1)
.blend(noise(2))
.out()

render(o0)
