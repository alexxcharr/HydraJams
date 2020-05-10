a.show()
a.setBins(6)

s0.initScreen(0)

solid(()=>Math.sin(time*0.2), ()=>Math.sin(time* 0.1, ()=>Math.sin(time* 0.89)))
.diff(osc(140,0.001, 0.1).colorama().diff(voronoi(400)).scrollY(0.1), 0.1)
.blend(noise())
//.add(osc(4).kaleid(2))
.hue(0.2)
.shift(()=>a.fft[0]*0.1 +1 , ()=>a.fft[1] *0.01 +1, () => Math.sin(time))
//.saturate(1.2)
.contrast(0.9)
.diff(shape(40).invert().scale(1.4).color(0.3, 0.2, 0.5).modulate(noise(45, 0.1, 0.25)).blend(o0).scale(1.09))
.modulate(osc(6,0.01,() =>Math.sin(time) * 0.25).kaleid(3).scrollX(-0.5, -0.28888).scrollY(0.1, 0.1))
.blend(o1, 0.3)
//.contrast(1.1)
.modulate(o1, 0.01)
//.shift(()=>a.fft[0] * 1.3, ()=>a.fft[3])
.modulateScale(osc(4, 0.01))
//.repeat(2)
//.kaleid(3)
//.scale([1.1, 1.05, 0.99].fast(0.2))
.blend(o0, 0.3)
.out(o1)

render(o1)


noise(-8, 0.2, 0.8)
.add(voronoi(400).modulate(osc(3).color(0.25, 0.1, () => Math.sin(time))))
//.mult(osc(6, 0.1, 1).kaleid(2), 0.9)
//.add(osc(3, 0.1, 1).contrast(0.9).modulate(osc(3)))
//.hue(()=>Math.sin(time))
//.saturate(1.1)
//.diff(osc(-3))
//.scale([1.1, 1.05, 0.99].fast(0.2))
.diff(solid(()=>Math.sin(time)*0.3, ()=>Math.sin(time)*0.1, () => Math.sin(time)*0.4).kaleid(2).contrast(0.8))
//.contrast(1.3)
.add(osc(6).mult(noise(6)).kaleid(2))
.blend(o1, 0.6)
.modulateScale(osc(3))
.modulate(o1, 0.11)
//.blend(o1)
.saturate(1.2)
.blend(o0, 0.09)
.out(o1)

render(o0)

src(s0)
.scale([1.03, 0.99, 1.1].fast(0.2), 1.03)
//.scrollX(0.01, -0.1)
//.scrollY(0.1, 0.1)
//.modulateScale(osc(3))
//.hue(0.2)
//.diff(solid(()=>Math.sin(time*0.02), 0.1, 0.4).add(osc(2).diff(noise(6, 0.3)).add(s0).modulate(shape(3, 0.1, 0.1).scale(1.3).invert())))
//.saturate(1.3)
.blend(o0, 0.2)
//.modulate(o0, 0.01)
.saturate(1.05)
//.modulate(osc(-2), 0.1)
//.diff(osc(3, 0.1, 0.7).mult(noise(2)), 0.1)
//.blend(o0, 0.18)
.out(o1)

render(o1)