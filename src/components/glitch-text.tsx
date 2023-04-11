import "./module.glitch-text.css";



export default function GlitchText({ children , className , complexity=3 }: { children: string[1] , className?: string , complexity?: number }) {
    const spanList = [];
    for (let i = 0; i < complexity; i++) {
        // @ts-ignore
        spanList.push(<span style={{"--index": i}}>{ children }</span>);
    }

    const style = {"--stacks": complexity};
    // @ts-ignore
    return <div className={`container ${ className }`}><div className="stack" style={style}>{ spanList }</div></div>;
}