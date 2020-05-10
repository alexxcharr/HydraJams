s0.initScreen(0)

src(s0)
//.scale([0.99, 1.03, 1.01].fast(0.2), 0.99)
.saturate(1.3)
//.hue(0.02)
//.modulate(osc(3, 0.001))
//.add(noise(3, 0.1, 0.3).modulate(o0))
//.scrollX(0.01)
//.kaleid()
.add(shape(2, 0.1 ,0.2).modulate(osc(8)))
//.blend(o1)
//.modulate(o0, 0.01)
.out(o0)


osc(6, 0.1, () => a.fft[0])
.out(o3)

function() {
  Math.sin(time)

}

x=0.25
