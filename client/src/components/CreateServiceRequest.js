import { TextField, Button } from '@material-ui/core';

export default function CreateServiceRequest() {
    // TODO: custom useForm hook

    async function handleSubmit(e) {
        // Submit form
        // Change route to new ServiceRequest page
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Service Request</h2>
            <fieldset>
                {/* Title */}
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    id="title"
                    label="Title"
                    name="title"
                    type="text"
                    autoFocus
                />
                {/* Details */}
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    multiline
                    rows={4}
                    id="details"
                    label="Details"
                    type="text"
                    name="details"
                />
                {/* Due Date */}
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="dueDate"
                    label="Due Date"
                    name="dueDate"
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                {/* Budget */}
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="budget"
                    label="Budget"
                    name="budget"
                    type="number"
                />
                {/* Location */}
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    id="location"
                    label="Location"
                    name="location"
                    type="text"
                />
                {/* TODO: Photos (file upload) */}
                <Button variant="contained" margin="normal" color="primary" type="submit">
                    Submit
                </Button>
            </fieldset>
        </form>
    );
}
