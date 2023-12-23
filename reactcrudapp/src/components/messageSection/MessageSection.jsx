
import react from 'react';
import axios from 'axios';


// leftSection of Chat page

const MessageSection = () => {

    // const baseUrl = 'http://localhost:3002'

    // const { state, dispatch } = useContext(GlobalContext);

    return (
        <>
            <div className='border w-2/4'>
                <div>
                    <div>
                        <div>Select a message</div>
                        <div>
                            Choose from your existing conversations, start a new one, or just keep swimming.
                        </div>
                    </div>
                    <button>
                        New message
                    </button>
                </div>
            </div>
        </>

    );
}

export default MessageSection;