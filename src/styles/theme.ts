const breakpoints: any = ["40em", "52em", "60em"]
// aliases
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]

const space: any = [0, 4, 8, 16, 32, 64, 128, 256]
// aliases
space._ = space[0]
space.xxs = space[1]
space.xs = space[2]
space.sm = space[3]
space.md = space[4]
space.lg = space[5]
space.xl = space[6]
space.xxl = space[7]

const fontSizes: any = [12, 14, 16, 20, 24, 32, 48, 64]
// aliases
fontSizes.xxs = fontSizes[0]
fontSizes.xs = fontSizes[1]
fontSizes.sm = fontSizes[2]
fontSizes.md = fontSizes[3]
fontSizes.lg = fontSizes[4]
fontSizes.xl = fontSizes[5]
fontSizes.xxl = fontSizes[6]
fontSizes.ub = fontSizes[7]

export default { breakpoints, space, fontSizes }
