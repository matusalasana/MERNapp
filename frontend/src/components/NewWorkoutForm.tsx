
import { Box, Input, Stack, Text } from "@chakra-ui/react"
import { useForm } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';

import Title from "./Title"
import Button from "./Button"

const workoutSchema = z.object({
    title: z.string()
        .min(1, "Title is required"),
    load: z.number()
        .positive("Load must be positive"),
    reps: z.number()
        .min(1, "Reps must be at least 1")
        .positive("Reps must be positive"),
})

type WorkoutFormData = z.infer<typeof workoutSchema>;


function NewWorkoutForm() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<WorkoutFormData>({
        resolver: zodResolver(workoutSchema),
    });

    const onSubmit = (data: WorkoutFormData) => {
        const workoutData = {
            title: data.title,
            load: data.load,
            reps: data.reps,
        };

        const responseRequest = axios.post('/api/workouts', workoutData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const responseData = responseRequest.then((response) => response.data);

        if (!responseData) {
            toast.error('Failed to add workout. Please try again.');
            return;
        }
        toast.success('Workout added successfully!');

        reset();
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <Toaster
            position="top-center"
            toastOptions={{
                duration: 4000,
                style: {
                    background: '#363636',
                    color: '#fff',
                }
            }}

        />
        <Stack mx={'auto'} p={4} display={'flex'} gap={4} alignItems={'center'} justifyContent={'center'} width={{base:'100%', sm: '90%', md: '70%', lg: '50%', xl: '50%'}}>
            <Title text1="ADD" text2="WORKOUT" />
            <Box width={'100%'}>
                <Input placeholder="Workout Title" {...register("title")} />
                <Text px={'2'} fontSize={'10px'} color={'red.500'}>{errors.title && errors.title.message}</Text>
            </Box>
            <Box width={'100%'}>
                <Input placeholder="Load (in kg)" type="number" {...register("load", { valueAsNumber: true })} />
                <Text px={'2'} fontSize={'10px'} color={'red.500'}>{errors.load && errors.load.message}</Text>
            </Box>
            <Box width={'100%'}>
                <Input placeholder="Reps" type="number" {...register("reps", { valueAsNumber: true })} />
                <Text px={'2'} fontSize={'10px'} color={'red.500'}>{errors.reps && errors.reps.message}</Text>
            </Box>
            <Button type="submit" text="Add Workout" colorPalette="white" variant="solid" bgColor="blue.600" hoverBgColor="blue.700" />
        </Stack>
    </form>
  )
}

export default NewWorkoutForm