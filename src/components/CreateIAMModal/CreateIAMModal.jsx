import { useState } from "react";
import styled, { css } from "styled-components";
import { useIAM } from "../IAM";

const Button = styled.button`
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease-in-out;

  ${(props) => {
    switch (props.variant) {
      case "secondary":
        return css`
          background-color: #fff;
          border: 1px solid #d1d5db;
          &:hover {
            background-color: #f3f4f6;
          }
        `;
      default:
        return css`
          background-color: black;
          border: 1px solid black;
          color: white;
          &:hover {
            background-color: #3c3b3b;
          }
        `;
    }
  }}
`;

const CreateIAMModal = ({ isOpen, onClose }) => {
  const [type, setType] = useState("role");
  const [name, setName] = useState("");

  const { setIdentities, setAuthorizations } = useIAM();

  if (!isOpen) {
    return;
  }

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
      <form
        onSubmit={(event) => {
          event.preventDefault();

          if (type === "user") {
            setIdentities((previousState) => [...previousState, name]);
          }

          if (type === "role") {
            setAuthorizations((previousState) => [
              ...previousState,
              {
                name,
                identities: [],
              },
            ]);
          }

          setName("");

          onClose();
        }}
        className="bg-white p-6 rounded-lg space-y-4"
      >
        <div className="text-lg">Create IAM</div>
        <select
          onChange={(event) => setType(event.target.value)}
          value={type}
          className="border rounded-md border-gray-300 p-2 w-full"
        >
          <option value="role">Role</option>
          <option value="user">User</option>
        </select>
        <input
          onChange={(event) => setName(event.target.value)}
          value={name}
          className="border rounded-md border-gray-300 p-2 w-full"
          placeholder="Enter IAM name"
        />
        <div className="flex justify-end gap-2">
          <Button type="button" variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">Create</Button>
        </div>
      </form>
    </div>
  );
};

export default CreateIAMModal;
