import { useState } from 'react';
import * as Tone from 'tone'

function Sequencer() {
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

        if (!isPlaying) {  // starts Tone if stopped
            setIsPlaying(true)  // flips playing boolean
            setPlayButtonText('stop') // flips button text

            Tone.start() // start tone audio context on user interaction per spec of web audio api



            // leaving space mentally for a section for configuring the BPM and (stretch) probability of the sequence




            const seq = new Tone.Sequence((time, note) => { // instantiates sequence of triggers on synth
                synth.triggerAttackRelease(note, 0.1, time); // note comes from notes array state. 
                // subdivisions are given as subarrays
            }, notes).start(0); // which notes? notes array. start takes arg of "now" time

            // starts the transport. what actually STARTs our sequence
            Tone.Transport.start();


        } else { // if transport is playing, 
            setIsPlaying(false) // set play bool to off
            setPlayButtonText('play') // flip play button text
            Tone.Transport.stop(); // STOP the transport
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
                </select>

                <select name="selectTwo" id="note-select-2" onChange={handleSelectTwo}>
                    {/* uses scale state to return a list of notes in selected scale */}
                    {scale.map((note, i) => {
                        return (
                            <option key={i} value={note}>{note}</option>
                        )
                    })}
                </select>

                <select name="selectThree" id="note-select-3" onChange={handleSelectThree}>
                    {/* uses scale state to return a list of notes in selected scale */}
                    {scale.map((note, i) => {
                        return (
                            <option key={i} value={note}>{note}</option>
                        )
                    })}
                </select>

                <select name="selectFour" id="note-select-4" onChange={handleSelectFour}>
                    {/* uses scale state to return a list of notes in selected scale */}
                    {scale.map((note, i) => {
                        return (
                            <option key={i} value={note}>{note}</option>
                        )
                    })}
                </select>

                <select name="selectFive" id="note-select-5" onChange={handleSelectFive}>
                    {/* uses scale state to return a list of notes in selected scale */}
                    {scale.map((note, i) => {
                        return (
                            <option key={i} value={note}>{note}</option>
                        )
                    })}
                </select>

                <select name="selectSix" id="note-select-6" onChange={handleSelectSix}>
                    {/* uses scale state to return a list of notes in selected scale */}
                    {scale.map((note, i) => {
                        return (
                            <option key={i} value={note}>{note}</option>
                        )
                    })}
                </select>

                <select name="selectSeven" id="note-select-7" onChange={handleSelectSeven}>
                    {/* uses scale state to return a list of notes in selected scale */}
                    {scale.map((note, i) => {
                        return (
                            <option key={i} value={note}>{note}</option>
                        )
                    })}
                </select>

                <select name="selectEight" id="note-select-8" onChange={handleSelectEight}>
                    {/* uses scale state to return a list of notes in selected scale */}
                    {scale.map((note, i) => {
                        return (
                            <option key={i} value={note}>{note}</option>
                        )
                    })}
                </select>
            </div>

        </div>
    )

}

export default Sequencer
