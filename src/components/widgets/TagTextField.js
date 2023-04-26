import { useState } from 'react';
import {
    TextField,
    Chip,
    Button
} from '@mui/material';

const randomColors = [
    "#FF6B6B",
    "#71AFFF",
    "#FFE66D",
    "#FFB76B",
    "#6BFF9F",
    "#AF6BFF",
    "#FF6BB7",
    "#A0A0A0",
    "000000",
    "#8D99AE"
];

const TagTextField = () => {
    const [tags, setTags] = useState([]);
    const [tagInput, setTagInput] = useState('');

    const handleTagInputChange = (e) => {
        setTagInput(e.target.value);
    };

    const handleAddTag = () => {
        if (tagInput.trim() !== '') {
            setTags([...tags, tagInput.trim()]);
            setTagInput('');
        }
    };

    const handleDeleteTag = (tagToDelete) => {
        setTags(tags.filter(tag => tag !== tagToDelete));
    };

    const handleTagKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAddTag();
        }
    };

    return (
        <div style={{ marginTop: "15px" }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <TextField
                    label="Tags"
                    variant="outlined"
                    value={tagInput}
                    onChange={handleTagInputChange}
                    onKeyDown={handleTagKeyDown}
                    fullWidth

                />

                <Button style={{ marginLeft: "3%", backgroundColor: "black" }} variant="contained" onClick={handleAddTag}>
                    Add
                </Button>
            </div>
            <div style={{ marginTop: '10px' }}>
                {tags.map((tag, index) => (
                    <Chip
                        key={tag}
                        label={tag}
                        onDelete={() => handleDeleteTag(tag)}
                        style={{ marginRight: '10px', marginBottom: '10px', backgroundColor: randomColors[index % randomColors.length] }}
                    />
                ))}
            </div>
        </div>
    );
};

export default TagTextField;
