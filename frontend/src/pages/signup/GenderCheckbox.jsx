const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
    const genders = ["male", "female"];

    return (
        <div className="flex">
            {genders.map((gender) => (
                <div key={gender} className="form-control">
                    <label
                        className={`label gap-2 cursor-pointer ${
                            selectedGender === gender ? "selected" : ""
                        }`}
                    >
                        <input
                            type="checkbox"
                            className="checkbox border-slate-900"
                            checked={selectedGender === gender}
                            onChange={() => onCheckboxChange(gender)}
                        />
                        <span className="label-text">
                            {gender.charAt(0).toUpperCase() + gender.slice(1)}
                        </span>
                    </label>
                </div>
            ))}
        </div>
    );
};

export default GenderCheckbox;
