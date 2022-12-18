import { useState } from 'react'
import './index.css'
import reikiImage from  "./assets/reiki-image.webp"
import tarotImage from "./assets/tarot-image.webp"
import massageImage from "./assets/massage-image.webp"



export default function Body(){

    const [inputData, setInputData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        message: "",
        massage: false,
        reiki: false,
        tarotReading: false
        
    })
    
    const [messageSent, setMessageSent] = useState(false)

    function handleInputChange(event){
        const {name, value, type, checked} = event.target
        setInputData(prevState => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value

        }))
    }

    function emailInputData(event){
        event.preventDefault()
        
        const formData ={
            name: inputData.name,
            email: inputData.email,
            phone: inputData.phone,
            address: inputData.address,
            city: inputData.city,
            state: inputData.state,
            message: inputData.message,
            massage: inputData.massage ? "Masaage" : "",
            reiki: inputData.reiki ? "Reiki" : "",
            tarotReading: inputData.tarotReading ? "Tarot Reading" : ""
        }

        const serviceId="service_y6lvnjl"
        const templateId="template_s0cvfbm"

        emailjs.send(serviceId, templateId, formData)
            .then((res)=>{
                setInputData({
                    name: "",
                    email: "",
                    phone: "",
                    address: "",
                    city: "",
                    state: "",
                    message: "",
                    massage: false,
                    reiki: false,
                    tarotReading: false
                })
                setMessageSent(true)
            })
            .catch(err => console.log(err))
    }


    return(
        <div className='main-container'>
            <div className='options-header'>
                    <h1 className='center-h'>Wellness Options</h1>
                    <p className='center-p'>Find Your Center</p>
            </div>
            
            <div className='massage'>
                <h1>Massage <span className='balance'>Balance Your Body</span></h1>
                <h4 className='massage-style'>Styles of Massage</h4>
                <h5 className='massage-type'>Swedish Massage</h5>
                <p className='massage-info'>This is a gentle form of massage that uses long strokes, kneading, deep circular movements, vibration and tapping. It helps you feel relaxed and energized.</p>
                <h5 className='massage-type'>Deep Massage</h5>
                <p className='massage-info'>This massage technique uses slower, more-forceful strokes to target the deeper layers of muscle and connective tissue. It's commonly used to help with muscle damage from injuries.</p>
                <h6 className='massage-list-header'>Massage benefits can include:</h6>
                <ul className='massage-list'>
                    <li>Reducing physical and emotional stress</li>
                    <li>Increasing mind and body relaxation</li>
                    <li>Reducing pain, muscle soreness and body tension</li>
                    <li>Improves circulation, energy and alertness</li>
                    <li>Assists in lowering heart rate and blood pressure</li>
                    <li>Helps support Improving immune function</li>
                </ul>
            </div>

            <div className='massage'>
                <h1>Reiki <span className='balance'>Balance Your Energy</span></h1>
                <p className='massage-info'>This can be used in conjunction with other alternative therapies. It takes into account the whole person and helps activate each patient’s natural healing processes as well as restoring their physical and emotional well-being.</p>
            </div>

            <div className='massage'>
                <h1>Tarot Reading <span className='balance'>Natural Wisdom</span></h1>
                <p className='massage-info'>Tarot has a broad range of practices based on generations of tradition. After a single session, you’ll start to see changes to your situation, soul and mind. Contact me to find out more.</p>
            </div>

            <img src={reikiImage} className="reiki-image"/>
            <img src={tarotImage} className="tarot-image"/>
            <img src={massageImage} className="massage-image"/>

            

            <div className="contact">
                <div className='contact-info'>
                    <h1>Contact Me</h1>
                    <p>Shanna Carter</p>
                    <p>2895 S Hwy 89, Perry, UT 84302</p>
                    <p>(435) 720-1096</p>
                </div>


                <div className='request-container'>
                    <form className='request-form' onSubmit={emailInputData}>

                        <input id='request1' onChange={handleInputChange} required value={inputData.name} className="input-field" type="name" name= 'name'placeholder='Name'/>
                        <input id='request2' onChange={handleInputChange} required value={inputData.email} className="input-field" type="email" name= 'email'placeholder='Email'/>
                        <input id='request3' onChange={handleInputChange} required value={inputData.phone} className="input-field" type="phone" name= 'phone'placeholder='Phone'/>
                        <input id='request4' onChange={handleInputChange} required value={inputData.address} className="input-field" type="address" name= 'address'placeholder='Address'/>
                        <input id='request5' onChange={handleInputChange} required value={inputData.city} className='input-field' type='text' name= "city" placeholder="City"/>
                        <input id='request6' onChange={handleInputChange} required value={inputData.state} className='input-field' type='text' name= "state" placeholder="State"/>

                        <div className='checkboxes'>
                            <div className='checkbox-div'><input id= "checkbox" onChange={handleInputChange} checked={inputData.massage} className="input-checkbox1" name='massage' type="checkbox" ></input> Massage</div>
                            <div className='checkbox-div'><input id= "checkbox" onChange={handleInputChange} checked={inputData.reiki} className="input-checkbox2" name='reiki' type="checkbox"></input> Reiki</div>
                            <div className='checkbox-div'><input id= "checkbox" onChange={handleInputChange} checked={inputData.tarotReading} className="input-checkbox3" name='tarotReading' type="checkbox"></input> Tarot Reading</div>
                        </div>

                        <textarea className="input-message" onChange={handleInputChange} rows="10" cols="20" placeholder='Message' value={inputData.message} name='message'/>
                        <button className='submit' type='submit'>Submit</button>
                        
                    </form>
                    {messageSent && <p className='thanks-message'>Thank you for reaching out!</p>}
                </div>
                <div className='price-container'>
                    <h1 className='priceHeader'>Pricing:</h1>
                    <h4 className='prices'>Massage~$1.00 a Minute; 30, 60, 90 Sessions</h4>
                    <h4 className='prices'>Reiki~$60 for a 1 hr session</h4>
                    <h4 className='prices'>Tarot Reading~$50 for a 1 hr reading</h4>
                </div>
            </div> 
        </div>
    )
}