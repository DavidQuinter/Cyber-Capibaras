import react from "react";
import Image from "next/image";

function AboutUs(){
    return(
        <div>
            <div class="row py-5 mx-5">
                <div class="col-sm-6 py-5">
                    <h1>Sin Pelos en las manos</h1>
                    <p className="txt-base my-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>
                <div class="col-sm-6">
                    
                </div>
            </div>
            <br/>
            <div className="row mx-3">
                    <div className="col" style={{width: '50px', height: '50px', position: 'relative', borderRadius: '50%'}}>
                        <Image width={10} height={10} alt="imagen-saul" src={"/img/img-equipo/saul.jpg"} style={{objectFit: "contain", position: "initial", borderRadius: '50%'}}/>
                        <p className="txt-colaboradores">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>                        
                    </div>
                    <div className="col" style={{width: '50px', height: '50px', position: 'relative', borderRadius: '50%'}}>
                        <Image width={30} height={30} alt="imagen-david" src={"/img/img-equipo/david.jpg"} style={{objectFit: "contain", position: "initial", borderRadius: '50%'}}/>
                        <p className="txt-colaboradores">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>
                    </div>
                    <div className="col" style={{width: '50px', height: '50px', position: 'relative', borderRadius: '50%'}}>
                        <Image width={30} height={30} alt="imagen-martin" src={"/img/img-equipo/martin.jpg"} style={{objectFit: "contain", position: "initial", borderRadius: '50%'}}/>
                        <p className="txt-colaboradores">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>
                    </div>
                    <div className="col" style={{width: '50px', height: '50px', position: 'relative', borderRadius: '50%'}}>
                        <Image width={30} height={30} alt="imagen-santiago" src={"/img/img-equipo/santiago.jpg"} style={{objectFit: "contain", position: "initial", borderRadius: '50%'}}/>
                        <p className="txt-colaboradores">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>
                    </div>
                    <div className="col" style={{width: '50px', height: '50px', position: 'relative', borderRadius: '50%'}}>
                        <Image width={30} height={30} alt="imagen-benja" src={"/img/img-equipo/benja.png"} style={{objectFit: "contain", position: "initial", borderRadius: '50%'}}/>
                        <p className="txt-colaboradores">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>
                    </div>
                </div>
        </div>
    )
}
export default AboutUs