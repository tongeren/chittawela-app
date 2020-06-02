const ANGLE_DEGREES = 3;
const ANGLE_RADIANS = Math.PI * ANGLE_DEGREES / 180;

const calcClipHeight: (width: number) => number = (width: number) => {
    return width * Math.tan(ANGLE_RADIANS);
}

export default calcClipHeight;