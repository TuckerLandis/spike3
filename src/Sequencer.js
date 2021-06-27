import { useState } from 'react';
import * as Tone from 'tone'
import { Note, Scale } from "@tonaljs/tonal";

function Sequencer() {
    // states for playing boolean and for playbutton text. these get flipped when pressing play or stop
    const [isPlaying, setIsPlaying] = useState(false)
    const [playButtonText, setPlayButtonText] = useState('play')

    //temp holder for scale name before it becomes scale choice
    const [scaleName, setScaleName] = useState("major")
    
    const [octaveChoice, setOctave] = useState(4)

    const [rootNote, setRootNote] = useState("C")
   

    const c_major = ["off", "C4", "D4", "E4", "F4", "G4", "A4", "B4"]
    // array of notes in selected scale, defaults to C_Major
    const [selectedScale, setSelectedScale] = useState(c_major)

    // select populator for scale choice
    let scaleList = ["major", "minor", "pentatonic"]

    // handles scale option select, sets temp variable state scaleName
    const handleScaleName = (event) => {
        setScaleName(event.target.value)
        handleScaleChoice()
    }

    // handles octave ChannelMergerNode, calls handle scale choice
    const handleOctave = (event) => {
        setOctave(event.target.value)
        handleScaleChoice()
    }

    // sets an array of all notes to be the options in the root note select map
    const rootNotes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
    // handles change of rootnote, calls handle scale choice as well
    const handleRoot = (event) => {
        setRootNote(event.target.value)
        handleScaleChoice()
    }

    function handleScaleChoice () {
        let scaleO = (Scale.get(`${rootNote} ${scaleName}`).notes) // sets temp var to scale.get using root note and scalename
    
        // loops over scale array, and adds the respective octave to the array for rendering by Tone
        for (let i = 0; i < scaleO.length; i++) {
            scaleO[i] += octaveChoice
          }
          
          // adds an "off" option to the front of the array and the selection, this is the default
          scaleO.unshift('off')
        console.log('scale with octave', scaleO);
        
        // sets local state of selected scale to be the scale with it's octaves, this is mapped over in note selects
        setSelectedScale(scaleO)
    }

  
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
                    {/* uses selectedScale state to return a list of notes in selected selectedScale */}
                    {selectedScale.map((note, i) => {
                        return (
                            <option key={i} value={note}>{note}</option>
                        )
                    })}
                </select>

                <select name="selectTwo" id="note-select-2" onChange={handleSelectTwo}>
                    {/* uses selectedScale state to return a list of notes in selected selectedScale */}
                    {selectedScale.map((note, i) => {
                        return (
                            <option key={i} value={note}>{note}</option>
                        )
                    })}
                </select>

                <select name="selectThree" id="note-select-3" onChange={handleSelectThree}>
                    {/* uses selectedScale state to return a list of notes in selected selectedScale */}
                    {selectedScale.map((note, i) => {
                        return (
                            <option key={i} value={note}>{note}</option>
                        )
                    })}
                </select>

                <select name="selectFour" id="note-select-4" onChange={handleSelectFour}>
                    {/* uses selectedScale state to return a list of notes in selected selectedScale */}
                    {selectedScale.map((note, i) => {
                        return (
                            <option key={i} value={note}>{note}</option>
                        )
                    })}
                </select>

                <select name="selectFive" id="note-select-5" onChange={handleSelectFive}>
                    {/* uses selectedScale state to return a list of notes in selected selectedScale */}
                    {selectedScale.map((note, i) => {
                        return (
                            <option key={i} value={note}>{note}</option>
                        )
                    })}
                </select>

                <select name="selectSix" id="note-select-6" onChange={handleSelectSix}>
                    {/* uses selectedScale state to return a list of notes in selected selectedScale */}
                    {selectedScale.map((note, i) => {
                        return (
                            <option key={i} value={note}>{note}</option>
                        )
                    })}
                </select>

                <select name="selectSeven" id="note-select-7" onChange={handleSelectSeven}>
                    {/* uses selectedScale state to return a list of notes in selected selectedScale */}
                    {selectedScale.map((note, i) => {
                        return (
                            <option key={i} value={note}>{note}</option>
                        )
                    })}
                </select>

                <select name="selectEight" id="note-select-8" onChange={handleSelectEight}>
                    {/* uses selectedScale state to return a list of notes in selected selectedScale */}
                    {selectedScale.map((note, i) => {
                        return (
                            <option key={i} value={note}>{note}</option>
                        )
                    })}
                </select>
            </div>

            <div>
                <select name="scale-select" id="scale-select" onChange={handleScaleName} >
                    {scaleList.map((scale, i) => {
                        return (
                            <option key={i} value={scale}>{scale}</option>
                        )
                    })}
                </select>

                    {/* select for octave choice, triggers handle octave on change */}
                <select name="octave-select" id="octave-select" onChange={handleOctave} >
                    <option value="1"> 1 </option>
                    <option value="2"> 2 </option>
                    <option value="3"> 3 </option>
                    <option value="4"> 4 </option>
                    <option value="5"> 5 </option>
                    <option value="6"> 6 </option>
                    <option value="7"> 7 </option>
                    <option value="8"> 8 </option>


                </select>

                    {/* select for root note change, triggers handle root on change */}
                <select name="root-select" id="root-select" onChange={handleRoot}>
                   
                   {
                       rootNotes.map((rootNote, i) => {
                           return( 
                               <option key={i} value={rootNote}>{rootNote}</option>
                           )
                       })
                   }

                </select>
            </div>

        </div>
    )

}

export default Sequencer
