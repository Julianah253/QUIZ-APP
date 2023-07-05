import React, { useEffect } from 'react'
import Questions from './Questions'
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestion';
import { PushAnswer } from '../hooks/setResult';

/**redux store import */
import { useSelector, useDispatch } from 'react-redux'


export default function Quiz() {

  const state = useSelector(state => state);
  const {queue, trace} = useSelector(state => state.questions);
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(state)
  });
  
  /** next button event handler */
  function onNext() {
    console.log('On next click');
    if(trace < queue.length){
        // if(trace < 4) /** I tried this just to know how this works  */
        /** incease the trace value by one using MoveNextAction */
        dispatch(MoveNextQuestion())

        dispatch(PushAnswer(1))
    }
  }

  /**previous button event */
  function onPrev() {
    console.log('On prev click');
    if(trace > 0){
    /** reduce the trace value by one using MovePrevAction */
    dispatch(MovePrevQuestion())
    }
  }
  return (
    <div className='container'>
      <h1 className='title text-light'> Quiz Application </h1>

      {/* display questions */}
       <Questions/>


      <div className='grid'>
        <button className='btn prev' onClick={onPrev}> Prev </button>
        <button className='btn next' onClick={onNext}> Next </button>
      </div>
    </div>
  )
}



// export  { useSelector }
