import { FC } from "react"
import Button from '../components/Button'

const InvalidRole: FC = () => {
    return (
        <div className="w-full bg-bgColor pt-36">
            <div className="container mx-auto h-full flex justify-between items-center">
                <div className="flex-1">
                    <img src="/assets/sleep.png" alt="Yello Logo" className="w-2/3 ml-auto"/>
                </div>
                <div className="flex-1">
                    <div className="p-10 flex flex-col justify-center items-center">
                       <h1 className=" text-primary font-secondary text-8xl text-center">Oops..</h1>
                       <div className="my-12 text-white font-secondary text-center">
                        <p className="font-medium text-md uppercase mb-3">YOU DON'T HAVE ENOUGH PERMISSIONS.</p>
                        <p className="font-light text-sm">Ask your Discord Server owner for permissions to view this page</p>
                       </div>
                        <Button 
                            text="Reload" 
                            onClick={() => window.location.reload()}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvalidRole
