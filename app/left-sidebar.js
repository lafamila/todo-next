// import styles from "./page.module.css";
import Beer from "../public/icons/beer-svgrepo-com.svg";
import Coffee from "../public/icons/coffee-svgrepo-com.svg";
import Add from "../public/add-icon.svg";
export default function Sidebar() {
    return (
      <div className='left-sidebar'>
        <div>logo</div>
        <div className='project-container'>
            <div className='project'>
                <div className='project-icon'>
                    <Beer width='20px' height='20px'/>
                </div>
                <div className='project-name'>아주 아주 긴 한글 프로젝트</div>
            </div>
            <div className='project'>
                <div className='project-icon'>
                    <Coffee width='20px' height='20px'/>
                </div>
                <div className='project-name'>Project Name</div>
            </div>

        </div>
        <div className='left-sidebar-footer'>
            <div className='new-project'>
                <div className='new-project-icon'>
                    <Add width='20px' height='20px'/>
                </div>
                <div className='new-project-label'>New Project</div>
            </div>
        </div>
      </div>
    );
  }
  