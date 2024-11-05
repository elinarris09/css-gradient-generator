import React, { useEffect } from "react"
import randomColor from "randomcolor"

export default function Gradient() {
    const [color1, setColor1] = React.useState(randomColor());
    const [color2, setColor2] = React.useState(randomColor());
    const [gradientCode, setGradientCode] = React.useState(`linear-gradient(to right, ${color1}, ${color2})`);

    function handleChangeColor(e) {
        const {name, value} = e.target
        console.log(e.target)
        if (name === "color1") {
            setColor1(value);
        } else if (name === "color2") {
            setColor2(value);
        }
    }

    useEffect(() => {
        const gradient = `linear-gradient(to right, ${color1}, ${color2})`
        document.body.style.background = gradient;
        setGradientCode(gradient)
    }, [color1, color2])

    return (
        <div className="gradient">
            <h1>Color Gradient Tool</h1>
            <div className="color-picker">
                <input type="color" name="color1" value={color1} onChange={handleChangeColor}/>
                <input type="color" name="color2" value={color2} onChange={handleChangeColor}/>
            </div>
            <textarea className="gradient-code" language="css" readOnly value={gradientCode}/>
        </div>
    )
}