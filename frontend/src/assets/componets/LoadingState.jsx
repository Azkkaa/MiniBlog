import { SpinnerGapIcon } from '@phosphor-icons/react';

const LoadingState = () => {
    return (
        <div className='flex justify-center items-center py-10'>
            <div className='bg-blue-50 p-2 rounded-lg'>
                <SpinnerGapIcon size={43} className="animate-spin text-blue-600 text-center" weight='bold'/>
            </div>
        </div>
    );
};

export default LoadingState;