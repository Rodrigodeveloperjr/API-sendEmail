# Send email

### All submission fields are mandatory

- to - string
- subject - string
- text - string

`POST /email`

Requisition body

```json
{
	"to": "example@org.com.br",
	"subject": "Example",
	"text": "example.com"
}
```

Expected return

**STATUS 200 - OK**
```json
{
	"message": "Email sended with success!"
}
```
