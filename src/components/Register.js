import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Logo from "../image/logo.png";
import pannier_noir from "../image/pannier_noir.png";
import facebook_icon from "../image/facebook_icon.svg"
import mail_icon from "../image/mail_icon.svg"
import phone_icon from "../image/phone_icon.svg"
export default class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            prenom:'',
            email:'',
            keyword:'',
        }
        document.title = "Register Page"
    }
    changeName(e){
        this.setState({
            name:e.target.value
        })
    }
    changePrenom(e){
        this.setState({
            prenom:e.target.value
        })
    }
    changeEmail(e){
        this.setState({
            email:e.target.value
        })
    }
    changeKeyword(e){
        this.setState({
            keyword:e.target.value
        })
    }
    submit(e){
        e.preventDefault();
        localStorage.setItem('name',this.state.name)
        this.setState({
            name:''
        })
        localStorage.setItem('prenom',this.state.prenom)
        this.setState({
            prenom:''
        })
        localStorage.setItem('email',this.state.email)
        this.setState({
            email:''
        })
        localStorage.setItem('keyword',this.state.keyword)
        this.setState({
            keyword:''
        })
    }       
            
  render() {
    
    return (
        
      <>
       <nav className="navbar navbar-expand-lg nav_login">
            <div className="container">
              <Link to="/" className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="#">
                  <img src={Logo} alt="" width={150} />
                </a>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-center"
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/" className="nav-link active ">
                      Acceuil
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/boutique" className="nav-link active">
                      Boutique
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active yellow" href="#">
                      A propos
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active yellow" href="#">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div className="justify-content-end">
                <Link to="/login" className="LOGIN_noir">
                  Login
                </Link>
                <span className="ligne_noir"></span>
                <img className="pannier" src={pannier_noir} alt="" />
              </div>
            </div>
          </nav>
          <section className='register_section'>
            <div className="container ">
                <div className="row">
                    
                        <div className="col-md-8 register_part">
                            
                            <form onSubmit={this.submit.bind(this)} className='form_register'>
                                <div className="form_input_register">
                                <h3 className='title_register'>Crée un compte</h3>
                            <div className="form-input-register">
                               <input value={this.state.name} onChange={this.changeName.bind(this)} type="text" className="nom" placeholder='Nom*' required />
                               <input value={this.state.prenom} onChange={this.changePrenom.bind(this)} type="text" className="prénom" placeholder='Prénom*'  required/><br />
                               <input value={this.state.email} onChange={this.changeEmail.bind(this)}  type="text" className="mail_register" placeholder="email*" required /><br />
                               <input value={this.state.keyword} onChange={this.changeKeyword.bind(this)} type="password" className="pwd_register" placeholder='Mot de passe*' required/><br />
                               <button className='create_account'>Crée mon compte</button>
                            </div>
                                </div>
                          
                            </form>
                        </div>
                        <div className="col-md-4  login_media">
            <div className="MEDIA">
                <div className="row">
            <div className="col-md-3">
                <div className=" login_media">
                    <img src={phone_icon} alt="" width={40}/>
                </div>
            </div>
            <div className="col-md-9 text-white">
                <p>07 80 49 06 34</p>
            </div>
                </div>
                <div className="row">
            <div className="col-md-3">
                <div className=" login_media">
                    <img src={mail_icon} alt="" width={40}/>
                </div>
            </div>
            <div className="col-md-9 text-white">
               <h6>solooproller@gmail.com</h6>
            </div>
                </div>
                <div className="row">
            <div className="col-md-3">
                <div className=" login_media">
                    <img src={facebook_icon} alt="" width={40}/>
                </div>
            </div>
            <div className="col-md-9 text-white">
                <p>@soloopboutique </p>
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
}
