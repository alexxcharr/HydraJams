a.show()

a.setBins(6)


osc(12, -0.001, 0.753)
.modulate(osc())
//.blend(o0)
.add(noise(9, 0.001).kaleid(6).modulate(osc(2).color(() => a.fft[0] * 0.01, () => a.fft[1] * 0.001), 0.2))
//.saturate(1.15)
//.brightness(0.2)
//.contrast(1).2
.modulate(o0)
//.blend(voronoi().modulate(osc().color(0.3, 0.12, 0.6666).blend(o0)))
//.add(noise(200))
//.scrollX(0.01, 0.01)
.diff(osc(30, 0.001, 0.5))
.add(noise(() => a.fft[0] * 0.5, 0.001).modulate(o0).scale(() => a.fft[1] * 0.01 + 0.1).kaleid().repeat(10))
.modulateScale(osc(12, 0.001))
.modulate(o0)
//.kaleid()
.blend(o0)
.out()

src(o0)
.mult(shape(2, 0.01, 0.1).modulate(noise(90, 0.007).modulate(noise(15))).repeatY(3).modulate(osc(4))).scale(()=>a.fft[0])
.out(o1)

render(o1)
