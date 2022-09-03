import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';
import Tilt from 'react-parallax-tilt';

const CardDeal = () => (
    
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden"/> in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px mt-5]`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
      
      <Button styles="mt-10"/>
      </div>
      
      <div className={layout.sectionImg}>
        <Tilt className="tilt-img" tiltMaxAngleX={15} tiltMaxAngleY={15} perspective={500} scale={1.1} transitionSpeed={1000} gyroscope={true}>
          <img src={card} alt="card" className="w-[100%] h-[100%]"/>
        </Tilt>
      </div>
    </section>

)
export default CardDeal