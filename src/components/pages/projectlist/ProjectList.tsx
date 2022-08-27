import React from 'react';
import "./projectlist.css"

export default function ProjectList(props: {title: string; active: any; setSelected: any; id: string}) {
  return (
    <>
      <li className={props.active ? "projectlist active" : "projectlist"}
          onClick={()=>props.setSelected(props.id)}>
          {props.title}
      </li>
    </>
  )
}
