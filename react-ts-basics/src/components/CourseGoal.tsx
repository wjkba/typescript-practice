import { type ReactNode } from "react";

interface CourseGoalProps{
    id: number,
    title: string;
    children: ReactNode // kod jsx czyli wszystko co jest renderowalne jest typu ReactNode
    onDelete: (id:number) => void;
}

export default function CourseGoal({id, title, children, onDelete}: CourseGoalProps){
    return(<article>
        <div>
            <h2>{title}</h2>
            {/* children to bedziee <p>TEXT</p> z App.tsx */}
            {children}
        </div>
        <button onClick={()=> onDelete(id)}>Delete</button>
    </article>)
}


// const CourseGoal: FC<CourseGoalProps> = ({title, children}) => {
//     return(<article>
//         <div>
//             <h2>{title}</h2>
//             {/* children to bedziee <p>TEXT</p> z App.tsx */}
//             {children}
//         </div>
//         <button>Delete</button>
//     </article>)
// }

// export default CourseGoal;



