import { EXP } from "../fixtures";

export type ExpProps = {
  thumbnail: string;
  position: string;
  company: string;
  role: string;
  mode: string;
  start: string;
  end: string;
}

export const Experience = () => {
  return (
    <div className="flex flex-col gap-10 min-h-screen justify-center">
      <h2>Experience</h2>
      <div className="flex flex-col gap-10 justify-center pl-1">
        {EXP.map((e, i) => <ExpItem {...e} key={i} />)}
      </div>
    </div>
  )
}


export const ExpItem = (props: ExpProps) => {
  return (
    <div className="flex gap-5">
      <img src={props.thumbnail} />
      <div className="flex flex-col">
        <h3>{props.position}</h3>
        <h4>{props.company}</h4>
        <p>{props.role}</p>
        <p>{props.mode}</p>
        <p>{props.start} ~ {props.end}</p>
      </div>
    </div>
  )
}
