import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Form = () => {
    const navigate = useNavigate()
    const [name,setName] = useState('')
    const [course,setCourse] = useState('')
    const [date,setDate] = useState('')
    const [score,setScore] = useState('')
    const [instructor,setInstructor] = useState('')
    const [regno,setRegno] = useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log({name,course,score,date})
        navigate('/certificate', { state: { name, course, score, date,instructor,regno } });
    }
  return (
    <>
       <section className="vh-100 bg-image" style={{backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")'}}>
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
            <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{borderRadius: 15}}>
                    <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">Certificate Generator</h2>
                    <form>
                        <div className="form-outline mb-2">
                            <input type="text" id="form3Example1" value={name} onChange={e=>setName(e.target.value)} className="form-control form-control-lg" placeholder='Enter Full Name' />
                        </div>
                        <div className="form-outline mb-2">
                            <input type="text" id="form3Example" value={course} onChange={e=>setCourse(e.target.value)} className="form-control form-control-lg" placeholder='Enter Course Name' />
                        </div>
                        <div className="form-outline mb-2">
                            <input type="date" id="form3Examp" value={date} onChange={e=>setDate(e.target.value)} className="form-control form-control-lg" placeholder='Select Date' />
                        </div>
                        <div className="form-outline mb-2">
                            <input type="text" id="form3Exampl" value={score} onChange={e=>setScore(e.target.value)} className="form-control form-control-lg" placeholder='Enter Score' />
                        </div>
                        <div className="form-outline mb-2">
                            <input type="text" id="form3Examp" value={instructor} onChange={e=>setInstructor(e.target.value)} className="form-control form-control-lg" placeholder='Enter Director Name' />
                        </div>
                        <div className="form-outline mb-2">
                            <input type="text" id="form3Exam" value={regno} onChange={e=>setRegno(e.target.value)} className="form-control form-control-lg" placeholder='Enter Reg. No.' />
                        </div>
                        <div className="d-flex justify-content-center">
                        <button type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={handleSubmit}>Generate Certificate
                        </button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
       </section>

    </>
  )
}

export default Form