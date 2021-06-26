import { useState } from 'react';
import * as Tone from 'tone'

function Sequencer () {
    // states for playing boolean and for playbutton text. these get flipped when pressing play or stop
    const [isPlaying, setIsPlaying] = useState(false)
    const [playButtonText, setPlayButtonText] = useState('play')


    const c_major = ["off", "C4", "D4", "E4", "F4", "G4", "A4", "B4"]

    // state for scale. changed on handleScaleChange
    const [scale, setScale] = useState(c_major)

    

    // state for each step in sequence
    const [noteOne, setNoteOne] = useState(null)
    const [noteTwo, setNoteTwo] = useState(null)
    const [noteThree, setNoteThree] = useState(null)
    const [noteFour, setNoteFour] = useState(null)
    const [noteFive, setNoteFive] = useState(null)
    const [noteSix, setNoteSix] = useState(null)
    const [noteSeven, setNoteSeven] = useState(null)
    const [noteEight, setNoteEight] = useState(null)


    // synth instantiation, will have .chain 
    const synth = new Tone.PolySynth().toDestination();
    synth.volume.value = -6;

    let notes = [noteOne, noteTwo, noteThree, noteFour, noteFive, noteSix, noteSeven, noteEight]

    // these handle the input -> state change of each note select below
   const handleSelectOne = (event) => {
    setNoteOne(event.target.value)
   }
   const handleSelectTwo = (event) => {
    setNoteTwo(event.target.value)
   }
   const handleSelectThree = (event) => {
    setNoteThree(event.target.value)
   }
   const handleSelectFour = (event) => {
    setNoteFour(event.target.value)
   }
   const handleSelectFive = (event) => {
    setNoteFive(event.target.value)
   }
   const handleSelectSix = (event) => {
    setNoteSix(event.target.value)
   }
   const handleSelectSeven = (event) => {
    setNoteSeven(event.target.value)
   }
   const handleSelectEight = (event) => {
    setNoteEight(event.target.value)
   }






    const playButton = () => {

        console.log(notes);
        


        if (!isPlaying) {
            setIsPlaying(true)
            setPlayButtonText('stop')
        Tone.start()

        const seq = new Tone.Sequence((time, note) => {
            synth.triggerAttackRelease(note, 0.1, time);
            // subdivisions are given as subarrays
        }, notes).start(0);
        Tone.Transport.start();


        } else {
            setIsPlaying(false)
            setPlayButtonText('play')
            Tone.Transport.stop();
        }
        

    }
    
    






    return (
        <div>
            <button onClick={playButton}>{playButtonText}</button>
            <div>
            <select name="selectOne" id="note-select-1" onChange={handleSelectOne}>
                   

                   {/* uses scale state to return a list of notes in selected scale */}
                   {scale.map((note, i) => {
                       return (
                           <option key={i} value={note}>{note}</option>
                       )
                   })}
                   
                   
                   
                   
                   
                   
                    {/* <option value="off">off</option>
                    <option value="A4">A4</option>
                    <option value="Bb4">Bb4</option>
                    <option value="B4">B4</option>
                    <option value="C4">C4</option>
                    <option value="C#4">C#4</option>
                    <option value="D4">D4</option>
                    <option value="D#4">D#4</option>
                    <option value="E4">E4</option>
                    <option value="F4">F4</option>
                    <option value="F#4">F#4</option>
                    <option value="G4">G4</option>
                    <option value="Ab4">Ab4</option> */}
                </select>

                <select name="selectTwo" id="note-select-2" onChange={handleSelectTwo}>
                    <option value="off">off</option>
                    <option value="A4">A4</option>
                    <option value="Bb4">Bb4</option>
                    <option value="B4">B4</option>
                    <option value="C4">C4</option>
                    <option value="C#4">C#4</option>
                    <option value="D4">D4</option>
                    <option value="D#4">D#4</option>
                    <option value="E4">E4</option>
                    <option value="F4">F4</option>
                    <option value="F#4">F#4</option>
                    <option value="G4">G4</option>
                    <option value="Ab4">Ab4</option>
                </select>

                <select name="selectThree" id="note-select-3" onChange={handleSelectThree}>
                    <option value="off">off</option>
                    <option value="A4">A4</option>
                    <option value="Bb4">Bb4</option>
                    <option value="B4">B4</option>
                    <option value="C4">C4</option>
                    <option value="C#4">C#4</option>
                    <option value="D4">D4</option>
                    <option value="D#4">D#4</option>
                    <option value="E4">E4</option>
                    <option value="F4">F4</option>
                    <option value="F#4">F#4</option>
                    <option value="G4">G4</option>
                    <option value="Ab4">Ab4</option>
                </select>

                <select name="selectFour" id="note-select-4" onChange={handleSelectFour}>
                    <option value="off">off</option>
                    <option value="A4">A4</option>
                    <option value="Bb4">Bb4</option>
                    <option value="B4">B4</option>
                    <option value="C4">C4</option>
                    <option value="C#4">C#4</option>
                    <option value="D4">D4</option>
                    <option value="D#4">D#4</option>
                    <option value="E4">E4</option>
                    <option value="F4">F4</option>
                    <option value="F#4">F#4</option>
                    <option value="G4">G4</option>
                    <option value="Ab4">Ab4</option>
                </select>

                <select name="selectFive" id="note-select-5" onChange={handleSelectFive}>
                    <option value="off">off</option>
                    <option value="A4">A4</option>
                    <option value="Bb4">Bb4</option>
                    <option value="B4">B4</option>
                    <option value="C4">C4</option>
                    <option value="C#4">C#4</option>
                    <option value="D4">D4</option>
                    <option value="D#4">D#4</option>
                    <option value="E4">E4</option>
                    <option value="F4">F4</option>
                    <option value="F#4">F#4</option>
                    <option value="G4">G4</option>
                    <option value="Ab4">Ab4</option>
                </select>

                <select name="selectSix" id="note-select-6" onChange={handleSelectSix}>
                    <option value="off">off</option>
                    <option value="A4">A4</option>
                    <option value="Bb4">Bb4</option>
                    <option value="B4">B4</option>
                    <option value="C4">C4</option>
                    <option value="C#4">C#4</option>
                    <option value="D4">D4</option>
                    <option value="D#4">D#4</option>
                    <option value="E4">E4</option>
                    <option value="F4">F4</option>
                    <option value="F#4">F#4</option>
                    <option value="G4">G4</option>
                    <option value="Ab4">Ab4</option>
                </select>

                <select name="selectSeven" id="note-select-7" onChange={handleSelectSeven}>
                    <option value="off">off</option>
                    <option value="A4">A4</option>
                    <option value="Bb4">Bb4</option>
                    <option value="B4">B4</option>
                    <option value="C4">C4</option>
                    <option value="C#4">C#4</option>
                    <option value="D4">D4</option>
                    <option value="D#4">D#4</option>
                    <option value="E4">E4</option>
                    <option value="F4">F4</option>
                    <option value="F#4">F#4</option>
                    <option value="G4">G4</option>
                    <option value="Ab4">Ab4</option>
                </select>

                <select name="selectEight" id="note-select-8" onChange={handleSelectEight}>
                    <option value="off">off</option>
                    <option value="A4">A4</option>
                    <option value="Bb4">Bb4</option>
                    <option value="B4">B4</option>
                    <option value="C4">C4</option>
                    <option value="C#4">C#4</option>
                    <option value="D4">D4</option>
                    <option value="D#4">D#4</option>
                    <option value="E4">E4</option>
                    <option value="F4">F4</option>
                    <option value="F#4">F#4</option>
                    <option value="G4">G4</option>
                    <option value="Ab4">Ab4</option>
                </select>
            </div>
                

        </div>
    )

}

export default Sequencer

// A	440
// B flat	466
// B	494
// C	523
// C sharp	554
// D	587
// D sharp	622
// E	659
// F	698
// F sharp	740
// G	784
// A flat	831
// A