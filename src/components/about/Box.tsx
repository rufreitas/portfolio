interface Box {
    title: String
    text?: String
    t1?: String
    t1Content?: string
    t2?: String
    t2Content?: string
    t3?: String
    t3Content?: string
}

const Box: React.FC<Box> = ({ title, text, t1, t1Content, t2, t2Content, t3, t3Content }) => {
    return (
        <div className="space-y-6 text-wrap w-[400px]">
            {t1 ? <div className="text-base font-light pl-4 space-y-3">
            <h2 className="text-2xl pb-2">• {title}</h2>
            <p><span className="font-semibold" >{t1}</span> {t1Content}</p> 
            <p><span className="font-semibold" >{t2}</span> {t2Content}</p>
            <p><span className="font-semibold" >{t3}</span> {t3Content}</p>
            </div> : <><h2 className="text-2xl">• {title}</h2>
            <p className="text-base font-light pl-4">{text}</p> </>  }    
        </div>
    )
}

export default Box