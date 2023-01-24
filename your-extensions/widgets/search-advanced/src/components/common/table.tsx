
import {React,jsx} from 'jimu-core';

type propsType = {list:any[],handleClick:(val:any)=>void,className?:any,locatingPosition:{status:boolean,error:boolean}}

export default function Table (props:propsType) {
    const { list, handleClick,locatingPosition } = props
    if (list?.length && !locatingPosition["status"] && !locatingPosition["error"]){        
        return (
            <table style={{width:"100%"}}>
                <caption></caption>
                <thead>
                    <tr>
                        <th>Comune</th>
                        <th>Codice Istat</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((sto, i) => (
                        <tr className="item-row" key={i}>
                        <td className="item-table" id={sto.attributes.OBJECTID} onClick={handleClick}>{sto.attributes.NOMECOMUNE}</td>
                        <td className="item-table" id={sto.attributes.OBJECTID} onClick={handleClick}>{sto.attributes.ISTAT}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
    return null;
  }