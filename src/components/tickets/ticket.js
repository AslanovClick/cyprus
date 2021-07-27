import { useState } from "react";
import styles from "./tickets.module.css";
import { ReactComponent as Plus } from "../../images/plusSmall.svg";
import { ReactComponent as Ean } from "../../images/ean.svg";
import { ReactComponent as Arrow } from "../../images/arrowTicket.svg";



export default function Ticket({ticketsList}) {
    const [current, setCurrent]=useState(0);
    const length = ticketsList.length;

    const nextSlide =()=>{
        setCurrent(current === length -1? 0: current +1 )
    }
    const prevSlide =()=>{
        setCurrent(current === 0? length -1: current -1 )
    }
  return (
      <div className={styles.wrapper}>
    <div className={styles.ticketWrapper}>

{ticketsList.map((ticket,index)=>{
            return(
                <>
          <div className={index===current? (styles.variantActive):(styles.variant)} key={index}>
           {index === current &&
           (
            <>
                <h2 className={styles.ticketTitle}>{ticket.name}</h2>

                 <div className={styles.ticket}>
                 <div className={styles.lineTicket}>
                    <div className={styles.lineLeftTicket}></div>
                    <div className={styles.lineRightTicket}></div>
                 </div>
                 <div className={styles.ticketDate}>{ticket.date}</div>
                 <div className={styles.lineTicket}>
                    <div className={styles.lineLeftTicket}></div>
                    <div className={styles.lineRightTicket}></div>
                 </div>
           <div>
           {ticket.track.map((tic)=>{
                     return(
                         <div className={styles.ticMap} key={tic}>
                             <Arrow className={styles.icon}/>
                             <span>{tic}</span>
                         </div>
                     )
                 })}
               </div>
                 <Ean className={styles.ean}/>
                 <span className={styles.price}>{ticket.price}</span>
                 <div className={styles.plusContainer}>
                   <Plus/>
                  </div>
                  <button className={styles.button} type='button'>
                  buy ticket
                  </button>
             </div>
             </>
           )}
          </div>
          {/* ///////////////////////////////////////////////////////////////////// */}
          <div className={index===current+1? (styles.variantActiveSec):(styles.variant)} key={ticket.name}>
           {index === current+1 &&
           (
            <>
                <h2 className={styles.ticketTitle}>{ticket.name}</h2>

                 <div className={styles.ticket}>
                 <div className={styles.lineTicket}>
                    <div className={styles.lineLeftTicket}></div>
                    <div className={styles.lineRightTicket}></div>
                 </div>
                 <div className={styles.ticketDate}>{ticket.date}</div>
                 <div className={styles.lineTicket}>
                    <div className={styles.lineLeftTicket}></div>
                    <div className={styles.lineRightTicket}></div>
                 </div>
           <div>
           {ticket.track.map((tic)=>{
                     return(
                         <div className={styles.ticMap} key={tic}>
                             <Arrow className={styles.icon}/>
                             <span>{tic}</span>
                         </div>
                     )
                 })}
               </div>
                 <Ean className={styles.ean}/>
                 <span className={styles.price}>{ticket.price}</span>
                 <div className={styles.plusContainer}>
                   <Plus/>
                  </div>
                  <button className={styles.button} type='button'>
                  buy ticket
                  </button>
             </div>
             </>
           )}
          </div>
          </>
            )
        })}
    </div>
    <div className={styles.arrowContainer}>
       <div className={styles.arrow} onClick={prevSlide}>
            <p className={styles.arrowLeft}> </p>
        </div>
       <div className={styles.arrow} onClick={nextSlide}>
            <p className={styles.arrowRight}> </p>
        </div>     
 
       </div>
    </div>
  );
}
