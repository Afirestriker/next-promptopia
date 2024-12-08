import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <img
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgdmlld0JveD0iMCAwIDE0MCAxNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMTA5XzIpIj4NCjxwYXRoIGQ9Ik03My4yODEgMjcuODMwNkM4Ni40MTAxIDMyLjEzNjQgOTcuOTkxOCAzOS44MjI5IDEwNy4wNjIgNDkuODM1OEMxMDguNTU2IDQ4LjQ5ODEgMTEwLjMyOCA0Ny43MTM3IDExMi4yMzUgNDcuNzEzN0MxMTIuNzk1IDQ3LjcxMzcgMTEzLjM0MiA0Ny43OTQ4IDExMy44NzQgNDcuOTIzNUMxMTcuMjMyIDM4LjU1MjEgMTE4LjQyNSAyOC40NTYzIDExNi44OTEgMTguMTkxM0MxMTYuODgzIDE4LjEyNzggMTE2Ljg2NSAxOC4wNjc5IDExNi44NTYgMTguMDA0NEMxMTAuNzI4IDEyLjQ4MDYgMTAzLjYyIDguMDI4NDcgOTUuODIyMSA0LjkyOTkzQzg3LjQ5NTkgMTEuMTExMSA3OS44NDQ3IDE4LjgxMTcgNzMuMjgxIDI3LjgzMDZaIiBmaWxsPSIjRkY1NzIyIi8+DQo8cGF0aCBkPSJNNDEuNTM2IDI0LjI5NjZDNDMuOTM2NSAyNC4wNzEgNDYuMzU4MyAyMy45MTQxIDQ4LjgxODggMjMuOTE0MUM1NS4wNTQ2IDIzLjkxNDEgNjEuMTEyNCAyNC42NTQ0IDY2LjkyNTMgMjYuMDI5MUM3My42NDQxIDE2Ljg4NTEgODEuNDg5MSA5LjExMDU1IDkwLjAxMjggMi45MTg3NkM4My42NzI5IDEuMDI1OCA3Ni45NTU5IDAgNjkuOTk5MiAwQzYxLjg5MzMgMCA1NC4xMTUyIDEuMzk0MTcgNDYuODc0NyAzLjkyODY5QzQyLjk4NDggOS4xOTUxNSAzOS43Njk5IDE0Ljk3OTggMzcuMjgzIDIxLjEzODFDMzkuMTE3OCAyMS43Nzc5IDQwLjYxNTkgMjIuODY4OSA0MS41MzYgMjQuMjk2NloiIGZpbGw9IiNGRjU3MjIiLz4NCjxwYXRoIGQ9Ik0zMy43NTc5IDM2LjUyNTFDMzMuNDMgMzYuNjAyNiAzMy4xMDQgMzYuNjY2MSAzMi43Nzk3IDM2LjcxODlDMzIuMDAwNiA0MS4xMzU4IDMxLjU3MDYgNDUuNjcyNiAzMS41NzA2IDUwLjMxMzRDMzEuNTcwNiA2My42Nzg3IDM0Ljk2ODcgNzYuMjMzMiA0MC44ODczIDg3LjIyOTdDNDIuMTYzNCA4Ny4wNjQgNDMuNDg4OCA4Ny4wNjQgNDQuODI4NCA4Ny4yMTIxQzQ1LjU0MDQgNzMuNDA2MSA0OC45ODA5IDU5LjEwMzEgNTUuNDc5NCA0NS4yODg0QzU3LjU2MDkgNDAuODYwOSA1OS44OTEgMzYuNjUyIDYyLjQxODUgMzIuNjUyOEM1Ni43OTQyIDMxLjM3MTQgNTAuOTM5MSAzMC42OTQ2IDQ0LjkyMzUgMzAuNjk0NkM0My44NDY2IDMwLjY5NDYgNDIuNzgzOCAzMC43NTYzIDQxLjcxNzUgMzAuODAzOUM0MC4zNzYyIDMzLjQyMTIgMzcuNDY4IDM1LjY0MiAzMy43NTc5IDM2LjUyNTFaIiBmaWxsPSIjRkY1NzIyIi8+DQo8cGF0aCBkPSJNNjguODI1MyAzNC40MzEyQzY2LjQwMDEgMzguMzA4NyA2NC4xNTQ2IDQyLjM4MDIgNjIuMTQzNSA0Ni42NTc5QzU1LjUzMDUgNjAuNzE1OSA1Mi4wOTUzIDc1LjI3NDQgNTEuNDczMSA4OS4zMDQyQzU0LjAzNzYgOTAuNjk4MyA1Ni4xMDMzIDkyLjYyODMgNTcuNTUzOSA5NC44Mjk3Qzc2LjY3MDQgOTAuNzU4MyA5Mi43Njk0IDgwLjQzNTEgMTAzLjQ2NiA2Ni43MzE0QzEwMi45MTggNjUuMDM5NCAxMDIuNjA2IDYzLjE2NTggMTAyLjYwNiA2MS4xODgyQzEwMi42MDYgNTkuNTg2MSAxMDIuODE4IDU4LjA1NDQgMTAzLjE4MiA1Ni42MzAzQzkzLjk3ODUgNDYuNDY3NSA4Mi4xOTI0IDM4LjcwMzUgNjguODI1MyAzNC40MzEyWiIgZmlsbD0iI0ZGNTcyMiIvPg0KPHBhdGggZD0iTTMwLjMwMzMgOTQuNzM4QzMxLjEzMTcgOTIuNzc4MSAzMi40NjQyIDkxLjE2MzYgMzQuMTEzOSA4OS45MjFDMjguMjI3IDc4Ljk0MjEgMjQuODY0MSA2Ni40MDcgMjQuODY0MSA1My4wNzY5QzI0Ljg2NDEgNDcuMzI0IDI1LjU1MTUgNDEuNzQwMyAyNi43NDEyIDM2LjM0NTJDMjUuMTc3OCAzNS44NDExIDIzLjg0NTMgMzUuMDE2MiAyMi44ODMgMzMuOTM1OEMxNy4wNzAyIDM1LjYzNDkgMTEuNTI1MiAzNy45NTc5IDYuMzUyMTggNDAuODczMUMyLjI4NjAxIDQ5Ljc0NCAwIDU5LjYwMzYgMCA3MC4wMDA4QzAgNzUuOTc1OCAwLjc1MjYwMyA4MS43NzI4IDIuMTYwODcgODcuMzA3MUMxMC40ODM2IDkxLjgyMSAxOS44NjkxIDk0Ljg0NTUgMjkuODM0NCA5Ni4wNzkzQzI5Ljk2MzEgOTUuNjI4MSAzMC4xMTY1IDk1LjE4MDQgMzAuMzAzMyA5NC43MzhaIiBmaWxsPSIjRkY1NzIyIi8+DQo8cGF0aCBkPSJNMTEyLjIzNSA3NC42NTkyQzExMC44NTEgNzQuNjU5MiAxMDkuNTM2IDc0LjI0NSAxMDguMzQ4IDczLjUwODNDOTcuMjY3MyA4Ny45ODU4IDgwLjIwMDcgOTguNzkzNiA1OS45MDE1IDEwMi41NzRDNTkuODY5OCAxMDQuMDI4IDU5LjU4OTYgMTA1LjQ3OSA1OS4wMDI2IDEwNi44N0M1OC43MTE4IDEwNy41NTUgNTguMzQ3IDEwOC4xOSA1Ny45NDM0IDEwOC43OTRDNzEuNDUzMiAxMjAuNzY5IDg5LjExNzMgMTI4LjE0MyAxMDguNTIxIDEyOC40MzlDMTE0LjA1OSAxMjQuNzgyIDExOS4wNDMgMTIwLjM1OCAxMjMuMzI2IDExNS4zMjFDMTIzLjQ3OCAxMTMuMzUgMTIzLjU4NCAxMTEuMzY2IDEyMy41ODQgMTA5LjM1NUMxMjMuNTg0IDk2LjYzODEgMTIwLjUwMyA4NC42NjM0IDExNS4xMzggNzQuMDM3MUMxMTQuMjIxIDc0LjQzODkgMTEzLjI0NiA3NC42NTkyIDExMi4yMzUgNzQuNjU5MloiIGZpbGw9IiNGRjU3MjIiLz4NCjxwYXRoIGQ9Ik01My4yMjg2IDExMy4yNjhDNTUuMTcxIDEyMi44MzYgNTguNTc2MiAxMzEuNzcyIDYzLjMyOCAxMzkuNjc0QzY1LjUyNTkgMTM5Ljg4IDY3Ljc0ODQgMTQwIDcwLjAwMDkgMTQwQzgyLjMzMTYgMTQwIDkzLjkwOCAxMzYuODAxIDEwMy45NyAxMzEuMjA1QzEwMy42NTEgMTMxLjIwOCAxMDMuMzM5IDEzMS4yMzUgMTAzLjAyMiAxMzEuMjM1Qzg0LjA4NzEgMTMxLjIzMyA2Ni43NDkxIDEyNC40NzQgNTMuMjI4NiAxMTMuMjY4WiIgZmlsbD0iI0ZGNTcyMiIvPg0KPHBhdGggZD0iTTM5LjQ1OTYgMTEzLjA5N0MzNC41MTkzIDExMS4wMSAzMS4wNjgyIDEwNy4wMzIgMjkuODYwOSAxMDIuNjg3QzIwLjQ1OTUgMTAwLjk4NSAxMS42NjA5IDk3LjY3MSAzLjg5MzQzIDkzLjAyMzJDMTIuMDI3NSAxMTYuMzc5IDMyLjE3ODYgMTM0LjA5NyA1Ni45NDIyIDEzOC43NzJDNTIuNDc5NSAxMzEuNDc1IDQ5LjE5OTQgMTIzLjI2NSA0Ny4xNTMxIDExNC40ODlDNDQuNjUyMSAxMTQuNjExIDQyLjAxNTMgMTE0LjE3NyAzOS40NTk2IDExMy4wOTdaIiBmaWxsPSIjRkY1NzIyIi8+DQo8cGF0aCBkPSJNMzAuMDMxOSAyMC44NzcyQzMwLjY4OTMgMjAuNzIwMyAzMS4zNDMyIDIwLjYxODEgMzEuOTg4MyAyMC41NTQ3QzM0LjI1MzIgMTUuNjMxOSAzNi45OTM5IDEwLjk3NTMgNDAuMTg0MSA2LjY2MjM1QzI3LjQ5OTEgMTIuNjQ0NCAxNi45MDYzIDIyLjMyMDcgOS43ODU2NCAzNC4zMDk1QzEzLjQ1NTIgMzIuMjA2OCAxNy4zMTcgMzAuNDA5IDIxLjMyNSAyOC45MDkxQzIxLjgxNjcgMjUuMzUwNSAyNS4yNjYgMjIuMDEyMyAzMC4wMzE5IDIwLjg3NzJaIiBmaWxsPSIjRkY1NzIyIi8+DQo8cGF0aCBkPSJNMTQwIDcwLjAwMDhDMTQwIDUxLjI5MzIgMTMyLjY0NyAzNC4zMTMgMTIwLjY5MSAyMS43NTQ5QzEyMC45NTQgMjIuOTg2OSAxMjEuMTg1IDI0LjIzMyAxMjEuMzc0IDI1LjQ5NUMxMjIuNzQgMzQuNjQ2MSAxMjEuOTM2IDQzLjY2NSAxMTkuMzY4IDUyLjE1NjlDMTIwLjkxNCA1NC41NDY5IDEyMS44NjUgNTcuNzA4OSAxMjEuODY1IDYxLjE4ODFDMTIxLjg2NSA2NC4xNjg1IDEyMS4xNjYgNjYuOTE0NiAxMTkuOTkzIDY5LjE0NkMxMjQuNzcyIDc5LjI5NDYgMTI3LjQ3NSA5MC42MTM2IDEyNy40NzUgMTAyLjU3NkMxMjcuNDc1IDEwNS4yNTkgMTI3LjMyNiAxMDcuOTA0IDEyNy4wNjMgMTEwLjUyQzEzNS4xOTcgOTkuMDgwOSAxNDAgODUuMTA1NyAxNDAgNzAuMDAwOFoiIGZpbGw9IiNGRjU3MjIiLz4NCjxwYXRoIGQ9Ik00MS45NDA1IDEwNy4yMThDNDYuMDczMSAxMDguOTY1IDUwLjYzNiAxMDcuNTEyIDUyLjEzMjEgMTAzLjk3M0M1My42MjgyIDEwMC40MzQgNTEuNDkxIDk2LjE0OTEgNDcuMzU4NCA5NC40MDIxQzQzLjIyNTkgOTIuNjU1IDM4LjY2MyA5NC4xMDc3IDM3LjE2NjkgOTcuNjQ2NkMzNS42NzA4IDEwMS4xODYgMzcuODA4IDEwNS40NzEgNDEuOTQwNSAxMDcuMjE4WiIgZmlsbD0iI0ZGNTcyMiIvPg0KPHBhdGggZD0iTTExMi4yMzUgNjYuODk1MkMxMTQuNDg3IDY2Ljg5NTIgMTE2LjMxMyA2NC4zMzkzIDExNi4zMTMgNjEuMTg2NEMxMTYuMzEzIDU4LjAzMzUgMTE0LjQ4NyA1NS40Nzc1IDExMi4yMzUgNTUuNDc3NUMxMDkuOTgyIDU1LjQ3NzUgMTA4LjE1NiA1OC4wMzM1IDEwOC4xNTYgNjEuMTg2NEMxMDguMTU2IDY0LjMzOTMgMTA5Ljk4MiA2Ni44OTUyIDExMi4yMzUgNjYuODk1MloiIGZpbGw9IiNGRjU3MjIiLz4NCjxwYXRoIGQ9Ik0zMi42ODYyIDMyLjAyODhDMzUuMTQ2MSAzMS40NDIzIDM2Ljc4NDkgMjkuNDc2MyAzNi4zNDY1IDI3LjYzNzVDMzUuOTA4MSAyNS43OTg3IDMzLjU1ODYgMjQuNzgzNSAzMS4wOTg3IDI1LjM3QzI4LjYzODggMjUuOTU2NSAyNyAyNy45MjI1IDI3LjQzODQgMjkuNzYxM0MyNy44NzY4IDMxLjYwMDEgMzAuMjI2MyAzMi42MTUzIDMyLjY4NjIgMzIuMDI4OFoiIGZpbGw9IiNGRjU3MjIiLz4NCjwvZz4NCjxkZWZzPg0KPGNsaXBQYXRoIGlkPSJjbGlwMF8xMDlfMiI+DQo8cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0id2hpdGUiLz4NCjwvY2xpcFBhdGg+DQo8L2RlZnM+DQo8L3N2Zz4NCg0K"
      />
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  )
}