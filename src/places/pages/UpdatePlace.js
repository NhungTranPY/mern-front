import React from "react";
import { useParams } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH} from '../../shared/util/validators'
import { useForm } from "../../shared/hooks/form-hook";
import './PlaceForm.css'

const DUMMY_PLACES = [
    {
        id: "p1",
        title: 'Empire State Building',
        description: 'One of the most famous sky in the world!',
        imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.0nfCV8dUvniRDZCyGeF_mwHaK9%26pid%3DApi&f=1&ipt=2b33d19bd5184a5f4535a5dc5d5030f6deefb7378e734a3a9af20d9e6dd90c34&ipo=images',
        address: '20 W 34th St., New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u1'
    },
    {
        id: "p2",
        title: 'Empire State Building',
        description: 'One of the most famous sky in the world!',
        imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.0nfCV8dUvniRDZCyGeF_mwHaK9%26pid%3DApi&f=1&ipt=2b33d19bd5184a5f4535a5dc5d5030f6deefb7378e734a3a9af20d9e6dd90c34&ipo=images',
        address: '20 W 34th St., New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u2'
    }
]

const UpdatePlace = () => {
    const placeId = useParams().placeId

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId)

    const [formState, inputHandler] = useForm({
        title: {
            value: identifiedPlace.title,
            isValid: true
        },
        description: {
            value: identifiedPlace.description,
            isValid: true
        }
    }, true)

    const placeUpdateSubmitHandler = (e) => {
        e.preventDefault()
        console.log(formState.inputs);
    }

    if (!identifiedPlace) {
        return (
            <div className="center">
                <h2>Could not find place!</h2>
            </div>
        )
    }

    return (
        <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
            <Input 
                id="title" 
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title."
                onInput={inputHandler}
                initialValue={formState.inputs.title.value}
                initialValid={formState.inputs.title.isValid}
            />
            <Input 
                id="description" 
                element="textarea"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description (min. 5 characters)."
                onInput={inputHandler}
                initialValue={formState.inputs.description.value}
                initialValid={formState.inputs.description.isValid}
            />
            <Button type="submit" disabled={!formState.isValid}>UPDATE PLACE</Button>
        </form>
    )
}

export default UpdatePlace