import React, { Component } from 'react'
import './Apropos.css'
import danseuse1 from '../images/danseuse1.svg'
import danseuse2 from '../images/danseuse2.svg'
import danseuse3 from '../images/dqnseuse3.svg'



    export default class Apropos extends Component {
    render() {
        return (




            <div>
                <section class="sec1">

                <h2 className="leftQuote">Une nouvelle aventure <span className="highlight">commence !</span> </h2>
                <img src={danseuse1} className='danseuse1' alt='danseuse1'/>
                <h2 className="rightQuote"> <i class="fa-solid fa-quote-left"></i> Derrière Soloop se cache une passionnée, multiple championne de France, en Equipe de France et toujours patineuse !<i class="fa-solid fa-quote-right"></i></h2>

                </section>

                <section class="sec2">

                    <h2 class="leftQuote1"> <i class="fa-solid fa-quote-left"></i> Soloop s’est créée à Rennes dans mon petit appartement d’étudiante <p/> 
                    Pendant des semaines et des nuits, l’idée a mûri et aujourd'hui je suis fière de vous présenter cette jeune entreprise bretonne, moderne et dynamique ! <i class="fa-solid fa-quote-right"></i> </h2>
                    <img src={danseuse2} className="danseuse2" alt="danseuse2"/>
                    <h2 class="rightQuote1">L'histoire <span className='highlight'>de Soloop</span> </h2>

                </section>

                <section class="sec3">

                    <h2 class="leftQuote2">Êtes-vous prêts à vivre cette <span className='highlight'>belle histoire ensemble ?</span></h2>
                    <img src={danseuse3} class="danseuse3" alt=""/>
                    <h2 class="rightQuote2"> <i class="fa-solid fa-quote-right"></i> Soloop c’est aussi la grande famille du patin : #soloopfamily ! Mon entourage et mes rencontres ont toujours été présents pour me conseiller et partager ma passion qui m’animait. <i class="fa-solid fa-quote-left"></i> </h2>

                </section>




















            </div>
        )
    }
    }
