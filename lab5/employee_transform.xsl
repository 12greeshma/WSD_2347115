<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html"/>

  <xsl:template match="/">
    <html>
      <head>
        <title>Employee Information</title>
      </head>
      <body>
        <h1>Employee Information</h1>
        <table border="1">
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
          <xsl:apply-templates select="employees/employee"/>
        </table>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="employee">
    <tr>
      <td><xsl:value-of select="employee_id"/></td>
      <td><xsl:value-of select="personal_information/First_name"/></td>
      <td><xsl:value-of select="personal_information/Last_name"/></td>
      <td><xsl:value-of select="personal_information/Date_of_Birth"/></td>
      <td><xsl:value-of select="personal_information/Gender"/></td>
      <td><xsl:value-of select="Employment_information/Position"/></td>
      <td><xsl:value-of select="Employment_information/Salary"/></td>
      <td><xsl:value-of select="Contact_information/Email"/></td>
      <td><xsl:value-of select="Contact_information/Phone_number"/></td>
    </tr>
  </xsl:template>
</xsl:stylesheet>
