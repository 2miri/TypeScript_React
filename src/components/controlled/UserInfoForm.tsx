import { useState } from "react";

export default function UserInfoForm() {
  const [formState, setFormState] = useState<{
    name: string;
    email: string;
    gender: string;
    skills: string[];
    bio: string;
  }>({
    name: "",
    email: "",
    gender: "",
    skills: [],
    bio: "",
  });
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormState((formState) => ({
      ...formState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    if (name === "skills") {
      setFormState((formState) => ({
        ...formState,
        skills: e.target.checked
          ? [...formState.skills, e.target.value]
          : formState.skills.filter((skill) => skill !== e.target.value),
      }));
      return;
    }

    setFormState((formState) => ({
      ...formState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="user-info">
      <h1 className="user-info__title">User Information</h1>
      <form className="user-info__form">
        <div className="form-group">
          <label className="form-group__label" htmlFor="name">
            이름:
          </label>
          <input
            className="form-group__input"
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label className="form-group__label" htmlFor="email">
            이메일:
          </label>
          <input
            className="form-group__input"
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group form-group--radio">
          <label className="form-group__label">성별:</label>
          <label className="form-group__radio">
            <input
              type="radio"
              id="male"
              value="남성"
              name="gender"
              onChange={handleInputChange}
              checked={formState.gender === "남성"}
            />
            남성
          </label>
          <label className="form-group__radio">
            <input
              type="radio"
              id="female"
              value="여성"
              name="gender"
              onChange={handleInputChange}
              checked={formState.gender === "여성"}
            />
            여성
          </label>
        </div>

        <div className="form-group form-group--checkbox">
          <label className="form-group__label">기술 관심:</label>
          <label className="form-group__checkbox">
            <input
              type="checkbox"
              value="JavaScript"
              name="skills"
              onChange={handleInputChange}
              checked={formState.skills.includes("JavaScript")}
            />
            JavaScript
          </label>
          <label className="form-group__checkbox">
            <input
              type="checkbox"
              value="React"
              name="skills"
              onChange={handleInputChange}
              checked={formState.skills.includes("React")}
            />
            React
          </label>
          <label className="form-group__checkbox">
            <input
              type="checkbox"
              value="Node.js"
              name="skills"
              onChange={handleInputChange}
              checked={formState.skills.includes("Node.js")}
            />
            Node.js
          </label>
        </div>

        <div className="form-group">
          <label className="form-group__label" htmlFor="bio">
            자기소개:
          </label>
          <textarea
            className="form-group__textarea"
            id="bio"
            placeholder="자기소개를 작성해주세요"
            name="bio"
            value={formState.bio}
            onChange={handleTextChange}
          ></textarea>
        </div>

        <button
          className="user-info__submit"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            alert("제출완료!");
          }}
        >
          제출
        </button>
      </form>

      <div className="preview">
        <h2 className="preview__title">실시간 입력값</h2>
        <p className="preview__item">이름: {formState.name}</p>
        <p className="preview__item">이메일: {formState.email}</p>
        <p className="preview__item">성별: {formState.gender}</p>
        <p className="preview__item">
          기술 관심: {formState.skills.join(", ")}
        </p>
        <p className="preview__item">자기소개: {formState.bio}</p>
      </div>
    </div>
  );
}
