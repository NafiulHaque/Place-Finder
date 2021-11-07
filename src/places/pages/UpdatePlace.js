import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import Card from "../../shared/components/UIElements/Card";
import { useForm } from "../../shared/hooks/form-hook";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/util/validators";
import './PlaceForm.css';

const DAMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky screapers in the world',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/myapp-c3e74.appspot.com/o/5afe8b46c08ca750f1040f62896545a5c-f1xd-w1020_h770_q80.jpg?alt=media&token=ecb1893a-f412-44ab-bfd6-dba76144fd38',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.748,
            lng: -73.98
        },
        creator: "u1"
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'One of the most famous sky screapers in the world',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/myapp-c3e74.appspot.com/o/5afe8b46c08ca750f1040f62896545a5c-f1xd-w1020_h770_q80.jpg?alt=media&token=ecb1893a-f412-44ab-bfd6-dba76144fd38',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.748,
            lng: -73.98
        },
        creator: "u2"
    },

]

const UpdatePlace = () => {

    const [isLoading, setIsLoading] = useState(true);
    const placeId = useParams().placeId;


    const [formState, inputHandler, setFormData] = useForm({
        title: {
            value: '',
            isValid: false
        },
        description: {
            value: '',
            isValid: false
        }
    }, false);

    const identifiedPlace = DAMMY_PLACES.find(p => p.id === placeId);

    useEffect(() => {

        if (identifiedPlace) {
            setFormData({
                title: {
                    value: identifiedPlace.title,
                    isValid: true
                },
                description: {
                    value: identifiedPlace.description,
                    isValid: true
                }

            }, true);
        }

        setIsLoading(false);
    }, [setFormData, identifiedPlace]);


    const placeUpdateSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
    }


    if (!identifiedPlace) {
        return (
            <div className="center" >
                <Card>
                    <h2>Could not find place!</h2>
                </Card>
            </div>
        )

    }

    if (isLoading) {
        return (
            <div className="center" >
                <h2>Loading......</h2>
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
                errorText="Please enter a valid title"
                onInput={inputHandler}
                initialvalue={formState.inputs.title.value}
                initialvalid={formState.inputs.title.isValid}
            />

            <Input
                id="description"
                element="textarea"

                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description"
                onInput={inputHandler}
                initialvalue={formState.inputs.description.value}
                initialvalid={formState.inputs.description.isValid}
            />
            <Button type="submit" disabled={!formState.isValid}>Update Place</Button>
        </form>

    )
};


export default UpdatePlace;