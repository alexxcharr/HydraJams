s0.initScreen(0)


noise(4, 0.1, 1.4)
//.luma(0.04)
.blend(o0)
.colorama(4)
.color(0.05, 0.16, () => Math.sin(time * 0.25))
.saturate(1.5)
//.hue(0.13)
.modulate(o0)
.diff(o0)
//.contrast()
//.blend(o0)
.modulate(osc(10, 0.1, 1.8), 0.1)
.add(osc(13, 0.15, 0.5).kaleid().modulateScale(osc(13).diff(noise(40).thresh(1.25, 0.5))))
.add(shape(2, 0.1, 0.1).color(0.1, 0.3).modulate(osc(100, 0.1)).rotate(()=>Math.sin(time), 0.314).repeatY())
.out()


shape(4, 0.2, 0.75).out(o1)

src(o0).mask(o1)
.repeat()
//.kaleid()
.modulate(osc(8))
.diff(o1)
.modulate(o0, 0.1)
.saturate(1.2)
.scale(1.01)
.out(o2)

render(o0)
