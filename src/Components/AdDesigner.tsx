import { useState } from 'react';
import './AdDesigner.css';

function AdDesigner() {

    const [flavor, setFlavor] = useState(" ");
    const [size, setSize] = useState(40);
    const [darkTheme, setTheme] = useState(false);

    function sizeUp() {
        setSize(prev => prev + 1);
      };
    function sizeDown() {
        setSize(prev => prev - 1);
      };
      const fontSizeStyle = {
          fontSize: size + "px"
      }

      let themeClass = "";
      if (darkTheme) {
          themeClass = " dark"
      }

      const disabled = "";





    return (
        <div className="AdDesigner">
            <h2>Ad Designer</h2>
            <p className={"ad_box" + themeClass}>
                <p className={"ad_vote" + themeClass}>Vote for</p>
                <p className={"ad_flavor" + themeClass}style={fontSizeStyle}> {flavor} </p>
            </p>
            <h3>What to Support</h3>
                <p className="ad_controls">
                    <button disabled={flavor==="Chocolate"} onClick={() => setFlavor("Chocolate")}>Chocolate</button>
                    <button disabled={flavor==="Vanilla"} onClick={() => setFlavor("Vanilla")}>Vanilla</button>
                    <button disabled={flavor==="Strawberry"} onClick={() => setFlavor("Strawberry")}>Strawberry</button>
                </p>
            <h3>Color Theme</h3>
                <p className="ad_controls">
                    <button disabled={darkTheme===false} onClick={() => setTheme(false)}>Light</button>
                    <button disabled={darkTheme} onClick={() => setTheme(true)}>Dark</button>
                </p>
            <h3>Font Size</h3>                
                <p className="ad_controls">
                    <button disabled={size < 17} onClick={sizeDown}>Down</button>
                    {size}
                    <button disabled={size > 59} onClick={sizeUp}>Up</button>
                </p>               
        </div>     
    )
}

export default AdDesigner;