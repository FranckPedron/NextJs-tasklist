import Task from "@models/tasks";
import {connectToDB} from "@utils/database";

import {NextResponse} from 'next/server'
import {IDeleteTaskRequestParam} from "@types";

export const DELETE = async (request: Request, {params}: IDeleteTaskRequestParam) => {
    try {
        await connectToDB();

        await Task.findByIdAndDelete(params.id);
        return  NextResponse.json(
            "Successfully deleted task",
            {status: 200},
        )
    } catch (e) {
        console.error(e);
        return NextResponse.json(
            "Error while deleting task",
            {status: 500}
        )
    }
}
