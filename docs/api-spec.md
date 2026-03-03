# RoomieZ API Specification (v0.1)

These are the core endpoints the frontend team should use to integrate with the backend.

---

## Authentication

### Register user
**Method:** `POST`  
**Endpoint:** `/api/auth/register`  
**Body (JSON):**
```json
{
  "email": "student@ku.ac.ke",
  "password": "your_password"
}
