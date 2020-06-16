import React, { useContext } from 'react';
import { UserContext, ChanelContext } from '../../App';

function CompoentE(props) {
    const user = useContext(UserContext);
    const chanel = useContext(ChanelContext);
    return (
        <div>
            {user} - {chanel}
        </div>
    );
}

export default CompoentE;