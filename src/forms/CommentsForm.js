import React, {useState} from 'react';
import useInputState from '../hooks/useInputState';
import './CommentsForm.scss';

function CommentsForm({valName, getFormData}) {
    const [comments, setComments] = useInputState('');
    const [isEditing, setIsEditing] = useState(true);

    
    
    
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        getFormData(valName, comments);
        setIsEditing(false)

    }
    
   
    
    
    let commentsOutput;

    if(isEditing) {
        commentsOutput = (
            <form className="CommentsForm" onSubmit={handleSubmit}>
                <h4>Add Comments</h4>
                <textarea className="TextArea" style={{resize: 'none'}} rows='5'  onChange={setComments} value={comments} ></textarea>
                <button className="Btn-CommentsForm" >Add</button>
                
                
            </form>
        )
    } else {
        commentsOutput = (
            <div className="CommentsForm"> 
                <h4>Add Comments</h4>
                <div className="LockedComment">
                        {comments}
                </div>
                <button className="Btn-CommentsForm" onClick={() => setIsEditing(true)}>Edit</button> 
                
            </div>
        )
    }


    return commentsOutput;
}

export default CommentsForm
