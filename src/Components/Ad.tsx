import './Ad.css';

interface Prop {
    flavor:string;
    fontSize:number;
    darkTheme:boolean;
}

function Ad ({flavor, fontSize, darkTheme}:Prop) {
   
    const fontSizeStyle = {
        fontSize: fontSize + "px"
    };
    let themeClass = " light";
    if (darkTheme) {
        themeClass = " dark";
    }
    
    return (
        <div className={"Ad" + themeClass}>
            <p className={"ad_vote" + themeClass}>Vote for</p>
            <p className={"ad_flavor" + themeClass} style={fontSizeStyle}> {flavor} </p>
        </div>
    )

}

export default Ad;