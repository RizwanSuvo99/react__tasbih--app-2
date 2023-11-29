import "./Tasbih.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import useIncrement from "../../utils/useUpdate";

export default function Tasbih() {
  const { count: count1, handleUpdate: update1 } = useIncrement(0);
  const { count: count2, handleUpdate: update2 } = useIncrement(0);
  const { count: count3, handleUpdate: update3 } = useIncrement(0);

  return (
    <div className="tasbih">
      <h1>Tasbih Counter</h1>
      <div className="tasbih__cards">
        <div className="tasbih__box">
          <div className="tasbih__counter">
            <h1>{count3}</h1>
          </div>
          <div className="tasbih__heading">
            <h2>الله أكبر</h2>
          </div>
          <div className="tasbih__btns">
            <FaMinus
              onClick={count3 > 0 && (() => update3(false))}
              className="icon"
            />
            <GrPowerReset onClick={() => update3("reset")} className="icon2" />
            <FaPlus
              onClick={count3 < 34 && (() => update3(true))}
              className="icon"
            />
          </div>
        </div>

        <div className="tasbih__box">
          <div className="tasbih__counter">
            <h1>{count2}</h1>
          </div>
          <div className="tasbih__heading">
            <h2>ٱلْحَمْدُ لِلَّٰهِ</h2>
          </div>
          <div className="tasbih__btns">
            <FaMinus
              onClick={count2 > 0 && (() => update2(false))}
              className="icon"
            />
            <GrPowerReset onClick={() => update2("reset")} className="icon2" />
            <FaPlus
              onClick={count2 < 33 && (() => update2(true))}
              className="icon"
            />
          </div>
        </div>

        <div className="tasbih__box">
          <div className="tasbih__counter">
            <h1>{count1}</h1>
          </div>
          <div className="tasbih__heading">
            <h2>سبحان الله</h2>
          </div>
          <div className="tasbih__btns">
            <FaMinus
              onClick={count1 > 0 && (() => update1(false))}
              className="icon"
            />
            <GrPowerReset onClick={() => update1("reset")} className="icon2" />
            <FaPlus
              onClick={count1 < 33 && (() => update1(true))}
              className="icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
