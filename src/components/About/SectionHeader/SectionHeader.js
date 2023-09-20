import "./SectionHeader.css"
const SectionHeader = ({title}) => {
    return ( 
        <div className="sectionHeader">
            <h6 className="section-header">
                {title}
                
            </h6>
        </div>
     );
}
 
export default SectionHeader;