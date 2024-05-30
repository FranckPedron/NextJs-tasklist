"use client"

import {useState, useEffect} from "react";
import Header from "@components/Header";
import AddTask from "@components/AddTask";
import {ITask} from "@types";
import {Flex, Spinner} from "@chakra-ui/react";
import NoTask from "@components/NoTask";
import Task from "@components/Task";
import Loading from "@components/Loading";


export default function Home() {

    const [task, setTask] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [allTasks, setAllTasks] = useState([]);

    const handleCreateTask = async () => {
        setIsLoading(true);
        try {
            const response = await fetch("/api/task/new", {
                method: "POST",
                body: JSON.stringify({
                    task: task,
                }),
            })
            if (response.ok) {
                setTask("");
                fetchTasks();
            } else {
                console.error("Error creating task");
            }
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    }

    const fetchTasks = async () => {
        try {
            const response = await fetch("/api/task/all");
            const data = await response.json();
            setAllTasks(data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    const handleCompleteTask = async (id:string) => {
        try {
            const response = await fetch(`/api/task/complete/${id}`, {
                method: "PATCH"
            })
            if (response.ok) {
                await fetchTasks();
            }
            else {
                console.error("Error patching task");
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    const handleDeleteTask = async (id:string) => {
        try {
            const response = await fetch(`/api/task/delete/${id}`, {
                method: "DELETE"
            })
            if (response.ok) {
                setAllTasks((prevTasks)=> prevTasks.filter((task: ITask) => task._id !== id));
            }
            else {
                console.error("Error");
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchTasks();
    }, [])
    return (
        <>
            <Header/>
            <AddTask task={task} setTask={setTask} handleCreateTask={handleCreateTask}/>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <Flex p="2rem" direction="column">
                        {allTasks.length > 0 ?
                            allTasks.map((iTask: ITask) => (
                                <Task key={iTask._id} iTask={iTask}
                                      handleCompleteTask={handleCompleteTask}
                                      handleDeleteTask={handleDeleteTask}
                                />
                            )) : (
                                <NoTask/>
                            )
                        }
                    </Flex>
                </>
            )}
        </>
    );
}
