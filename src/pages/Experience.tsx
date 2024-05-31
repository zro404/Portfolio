import { EXP } from "../fixtures";

export type ExpProps = {
  thumbnail: string;
  position: string;
  company: string;
  role: string;
  mode: string;
  start: string;
  end: string;
  blobRotation: number;
}

export const Experience = () => {
  return (
    <div className="flex flex-col gap-10 min-h-screen justify-center items-center sm:items-start">
      <h2 className="sm:text-[40px] text-[32px]">Experience</h2>
      <div className="flex flex-col gap-20 justify-center pl-1">
        {EXP.map((e, i) => <ExpItem {...e} key={i} />)}
      </div>
    </div>
  )
}


export const ExpItem = (props: ExpProps) => {
  return (
    <div className="flex gap-10">
      <img src={props.thumbnail} className="rounded-[50px] sm:size-40 size-32 sm:mt-8 mt-5 ml-2" />
      <div className="flex flex-col sm:mt-7 mt-4">
        <h3 className="sm:text-[28px] text-[24px]">{props.position}</h3>
        <h4 className="sm:text-[24px] text-[20px]">{props.company}</h4>
        <p>{props.role}</p>
        <p>{props.mode}</p>
        <p>{props.start} ~ {props.end}</p>
      </div>
      <img
        src="/src/assets/blobs/blob-small.svg"
        className="absolute z-[-1] sm:size-56 size-44 left-[14vw]"
        style={{
          transform: `rotate(${props.blobRotation}deg)`
        }}
      />
    </div>
  )
}
